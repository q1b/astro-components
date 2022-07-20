---
layout: "../../layouts/writings.astro"
title: Basic Sorting Algorithms
description: Implementation of 6 different algorithms, to sort a numeric array in javascript, and comparision between their Space and Time Complexity.
publishedOn: "2022-02-01"
---

# Installation

```bash
npm i position-component
```

```ts
const str: string = "J"
```

| Sorting algorithms                | Time Complexity | Space Complexity |
| --------------------------------- | --------------- | ---------------- |
| [Selection Sort](#selection-sort) | O(n^2)          | O(1)             |
| [Bubble Sort](#bubble-sort)       | O(n^2)          | O(1)             |
| [Insertion Sort](#insertion-sort) | O(n^2)          | O(1)             |
| [Quick Sort](#quick-sort)         | O(n^2)          | O(log(n))        |
| [Merge Sort](#merge-sort)         | O(n log(n))     | O(n)             |
| [Heap Sort](#heap-sort)           | O(n log(n))     | O(1)             |

## Selection Sort

```ts
function selectionSort(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		let min = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j
			}
		}
		if (min !== i) {
			let temp = arr[i]
			arr[i] = arr[min]
			arr[min] = temp
		}
	}
	return arr
}
```

## Insertion Sort

```ts
function insertionSort(arr: number[]) {
	for (let i = 1; i < arr.length; i++) {
		let j = i
		while (j > 0 && arr[j] < arr[j - 1]) {
			let temp = arr[j]
			arr[j] = arr[j - 1]
			arr[j - 1] = temp
			j--
		}
	}
	return arr
}
```

## Bubble Sort

```ts
function bubbleSort(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	return arr
}
```

## Merge Sort

```ts
function merge(left: number[], right: number[]) {
	let result = []
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}
	while (left.length) {
		result.push(left.shift())
	}
	while (right.length) {
		result.push(right.shift())
	}
	return result
}

function mergeSort(arr: number[]) {
	if (arr.length <= 1) {
		return arr
	}
	let mid = Math.floor(arr.length / 2)
	let left = arr.slice(0, mid)
	let right = arr.slice(mid)
	return merge(mergeSort(left), mergeSort(right))
}
```

## Quick Sort

```ts
// quick sort
function quickSort(arr: number[]) {
	if (arr.length <= 1) {
		return arr
	}
	let pivot = arr[0]
	let left = []
	let right = []
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat(pivot, quickSort(right))
}
```

## Heap Sort

```ts
// heap class
class Heap {
	constructor(arr: number[]) {
		this.arr = arr
	}
	arr: number[]
	sort() {
		this.buildHeap()
		for (let i = this.arr.length - 1; i > 0; i--) {
			let temp = this.arr[0]
			this.arr[0] = this.arr[i]
			this.arr[i] = temp
			this.heapify(0, i - 1)
		}
		return this.arr
	}
	buildHeap() {
		for (let i = Math.floor(this.arr.length / 2); i >= 0; i--) {
			this.heapify(i, this.arr.length - 1)
		}
	}
	heapify(i: number, end: number) {
		let left = 2 * i + 1
		let right = 2 * i + 2
		let largest = i
		if (left <= end && this.arr[left] > this.arr[largest]) {
			largest = left
		}
		if (right <= end && this.arr[right] > this.arr[largest]) {
			largest = right
		}
		if (largest !== i) {
			let temp = this.arr[i]
			this.arr[i] = this.arr[largest]
			this.arr[largest] = temp
			this.heapify(largest, end)
		}
	}
}
function heapSort(arr: number[]) {
	let heap = new Heap(arr)
	return heap.sort()
}
```
