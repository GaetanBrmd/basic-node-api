import { EventEmitter } from 'events';
import { Service } from 'typedi';

@Service()
class EventHandler extends EventEmitter {
  nb: number;
  constructor() {
    super();

    this.nb = 0;
    this.on('event1', () => {
      console.log('Un event sauvage apparait 🖐 !');
      this.nb++;
    });
    this.on('event2', () => console.log("Nb d'events lancés :", this.nb));
  }
}

export default EventHandler;
