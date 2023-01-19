import {Directive, HostListener, Input} from '@angular/core'

import {Intercom} from '../intercom.service'

/* tslint:disable:directive-selector */
@Directive({
  selector: '[zefIntercomShow]'
})
export class IntercomShowDirective {
  @Input() message: string
  @Input() intercomShow: string

  constructor(private intercom: Intercom) {
  }

  @HostListener('click')
  public onClick(): void {
    const msg = this.message ? this.message : this.intercomShow
    if (msg) {
      this.intercom.showNewMessage(this.message)
    }
    else {
      this.intercom.show()
    }
  }
}
