function swap(arr,index1, index2) {
	var temp = arr[index1];
	arr[index1]=arr[index2];
	arr[index2] = temp;
}

function quickSort(Arr, start, end) {
	if(end <= start) {
		return;	
	}
	var pivot = start,
	left = start +1,
	right = end -1;
	while(left<=right) {
		while(left <= end && Arr[left] < Arr[pivot]) {
			left++;
		}
		while(left <= right && Arr[right] > Arr[pivot]) {
			right--;
		}
		if(left < right) {
			swap(Arr,left,right);
		}
	}
	swap(Arr,left -1, pivot);
	quickSort(Arr, start, left-1);
	quickSort(Arr, left, end);
}

function sort(array1) {
	quickSort(array1, 0, array1.length);
	console.log(array1);
}