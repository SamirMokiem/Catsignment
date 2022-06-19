import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {

  @Input() visibleLoader: Boolean = false;
  @Output("onEndReached") onEndReached: EventEmitter<any> = new EventEmitter();

  @Input() loading: Boolean = false;
  @Input() reachedEnd: Boolean = false;

  scrollContainer!: HTMLElement;

  constructor(private elRef:ElementRef) {
    this.scrollContainer = this.elRef.nativeElement;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let _sc = this.scrollContainer;
    _sc.addEventListener('scroll', async() => {
      if (_sc.offsetHeight + _sc.scrollTop >= _sc.scrollHeight) {
        this.loading = true;
        this.onEndReached.emit();
        this.loading = false;
      }
    })
  }

}
