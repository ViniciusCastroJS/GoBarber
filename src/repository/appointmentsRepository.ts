import Appointment from '../models/appointment';
import appointmentsRouter from '../routes/appointments.routes';
import { isEqual } from 'date-fns'

interface CreateAppointmentDTO{
  provider: string;
  date: Date;
}


class appointmentRepository{
  private Appointments: Appointment[];

  constructor(){
    this.Appointments = [];
  }

  public Create({provider, date }: CreateAppointmentDTO): Appointment {
    const newAppointment = new Appointment({provider, date});

    this.Appointments.push(newAppointment);

    return newAppointment;
  }

  public findByDate(date: Date): Appointment | null{
    const findAppointment = this.Appointments.find(
       appointment => isEqual(date, appointment.date))


    return findAppointment || null;
  }

  public all(): Appointment[] {
    return this.Appointments;
  }


}

export default appointmentRepository;