import { uuid } from 'uuidv4'


class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({provider, date}: Omit<Appointment, 'id'>){
    this.provider = provider;
    this.id = uuid();
    this.date = date;

  }
}

export default Appointment;