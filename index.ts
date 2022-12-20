import { interval, skip, filter, from } from 'rxjs';

//interval hersaniye bir deger dondurur 0 dan 9999 a kadar
const source = interval(1000);

// skip berlirtilen deger kadar datayi atlamayi saglar
// ornek 1
// const example = source.pipe(skip(4));
// example.subscribe((val) => console.log(val));

// ornek 2

const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// numArrayObs.pipe(skip(2)).subscribe(console.log);
numArrayObs
  .pipe(filter((val, index) => index > 2))
  .subscribe((val) => console.log(val));
