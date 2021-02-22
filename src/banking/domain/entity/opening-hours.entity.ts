import { AtmHourEntity } from './atm-hour.entity';

export interface OpeningHoursEntity {
  dayOfWeek: number;
  hours: AtmHourEntity[];
}
