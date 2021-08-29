import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@spastickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
