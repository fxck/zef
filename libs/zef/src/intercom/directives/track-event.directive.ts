import {Directive, HostListener, Input} from '@angular/core'

import {Intercom} from '../intercom.service'
/* tslint:disable:directive-selector */
@Directive({
  selector: '[zefIntercomTrackEvent]'
})
export class IntercomTrackEventDirective {
  @Input() event: string
  @Input() intercomTrackEvent: string
  @Input() metadata: any

  constructor(private intercom: Intercom) {
  }

  @HostListener('click')
  public onClick(): void {
    const e = this.event ? this.event : this.intercomTrackEvent
    if (e && this.metadata) {
      this.intercom.trackEvent(e, this.metadata)
    }
    else if (e && !this.metadata) {
      this.intercom.trackEvent(e)
    }
    else {
      throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.')
    }
  }
}
