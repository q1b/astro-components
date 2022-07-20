import {
	createSignal,
	onCleanup,
	createEffect,
	Accessor,
	Setter,
} from "solid-js";
import { Howl, HowlOptions } from "howler";
export type SpriteMap = {
	[key: string]: [number, number];
};

export type HookOptions<T = any> = T & {
	id?: string;
	volume?: number;
	playbackRate?: number;
	interrupt?: boolean;
	initSoundEnabled?: boolean;
	sprite?: SpriteMap;
	onload?: () => void;
};

export interface PlayOptions {
	id?: string;
	forceSoundEnabled?: boolean;
	playbackRate?: number;
}

export type PlayFunction = (options?: PlayOptions) => void;

export interface ExposedData {
	sound: Accessor<Howl | null>;
	stop: (id?: string) => void;
	pause: (id?: string) => void;
	duration: Accessor<number | null>;
	setSoundEnabled: Setter<boolean>;
}

export type ReturnedValue = [PlayFunction, ExposedData];

export function createSound<T = any>(
	src: string | string[],
	{
		id,
		volume = 1,
		playbackRate = 1,
		initSoundEnabled = true,
		interrupt = false,
		onload,
		...delegated
	}: HookOptions<T> = {} as HookOptions
) {
	const [duration, setDuration] = createSignal<number | null>(null);
	const [sound, setSound] = createSignal<Howl | null>(null);
	const [soundEnabled, setSoundEnabled] = createSignal(initSoundEnabled);

	// Whenever volume/playbackRate are changed, change those properties
	// on the sound instance.
	createEffect(() => {
		if (sound()) {
			sound()?.volume(volume);
			sound()?.rate(playbackRate);
		}
	});
	setSound(
		new Howl({
			src: Array.isArray(src) ? src : [src],
			volume,
			onload,
			...delegated,
		})
	);
	const play: PlayFunction = (options?: PlayOptions) => {
		if (typeof options === "undefined") {
			options = {};
		}
		if (!sound() || (!soundEnabled() && !options.forceSoundEnabled)) {
			return;
		}
		if (interrupt) {
			sound()?.stop();
		}
		if (options.playbackRate) {
			sound()?.rate(options.playbackRate);
		}
		sound()?.play(options.id);
	};

	const stop = (id: any) => {
		if (!sound()) {
			return;
		}
		sound()?.stop(id);
	};

	const pause = (id: any) => {
		if (!sound()) {
			return;
		}
		sound()?.pause(id);
	};

	const returnedValue: ReturnedValue = [
		play,
		{
			sound,
			stop,
			pause,
			duration,
			setSoundEnabled,
		},
	];

	return returnedValue;
}

// export default createRoot(createSound);
