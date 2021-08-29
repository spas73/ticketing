import { Publisher, Subjects, TicketUpdatedEvent } from '@spastickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
