import { Router } from 'express';
import  { parseISO} from 'date-fns';
import AppointmentRepository from '../repository/appointmentsRepository'
import CreateAppointmentServices from '../services/CreateAppointmentService'

const appointmentsRouter = Router();
const appointmentRepository = new AppointmentRepository();


appointmentsRouter.get('/', 
  (request, response) => {
    const Appointments = appointmentRepository.all();

    return response.json(Appointments)
  }
)


appointmentsRouter.post('/',
  (request, response) => {
    try{
      const {provider, date, point } = request.body;
      const parsedDate = parseISO(date);
  
      const CreateAppointment = new CreateAppointmentServices(appointmentRepository);
  
      const appointment = CreateAppointment.execute({
        provider, date: parsedDate
      })
  
    }catch(err){
      return response.status(400).json({ error: err.message})
    }
  }
)

export default appointmentsRouter 