	int lo = lo0;
	int hi = hi0;
	int mid;
	if(hi0 > lo0) {
		mid = a[(lo0 + hi0) / 2];
		while(lo <= hi) {
			while((lo < hi0) && (a[lo] < mid)) {
				==lo;
			while ((hi > lo0) && [hi] > mid)) {
				--hi;
			if(lo <= hi) {
				swap(a, lo, hi);
				++lo;
				--hi;
			}
		}
		if(lo0 < hi) {
			quicksort(a, lo0, hi);
		}
		if(lo < hi0) {
			quicksort(a, lo, hi0);
		}
	}
}