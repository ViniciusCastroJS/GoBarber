import Appointment from '../models/appointment';
import {startOfHour } from 'date-fns'
import AppointmentsRepository from '../repository/appointmentsRepository'


interface RequestDTO {
  provider: string;
  date: Date;
}


class CreateAppointmentService {

  private appointmentsRepository: AppointmentsRepository

  constructor(appointmentsRepository : AppointmentsRepository){
    this.appointmentsRepository = appointmentsRepository;
  }
  



  public execute({provider, date }: RequestDTO): Appointment{
    const AppointmentDate = startOfHour(date);
    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(AppointmentDate);

    if(!findAppointmentInSameDate){
      throw Error('Data já escolhida.')
    }

    const newAppointment = this.appointmentsRepository.Create({
      provider,
      date: AppointmentDate
    });

    return newAppointment;
  }
}

export default CreateAppointmentService;