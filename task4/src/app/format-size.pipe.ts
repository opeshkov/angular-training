import { Pipe, PipeTransform } from '@angular/core';

const BYTES_IN_MB: number = 1024;
const BYTES_IN_GB: number = 1048576;

@Pipe({
  name: 'formatSize'
})
export class FormatSizePipe implements PipeTransform {



  transform(value: string): string {
    const size: number = parseInt(value);
    if (size >= BYTES_IN_GB) return `${(size / BYTES_IN_GB).toFixed(3)} GB`;
    if (size >= BYTES_IN_MB) return `${(size / BYTES_IN_MB).toFixed(3)} MB`;
    return `${size} KB`
  }

}
