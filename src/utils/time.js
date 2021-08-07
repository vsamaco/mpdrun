import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(duration)
dayjs.extend(relativeTime)

export const formatSeconds = (timeSeconds) => {
  return dayjs.duration(timeSeconds, 'seconds').format('H:mm');
}

export const formatDate = (isoString) => {
  return dayjs(isoString).format('MMM D, YYYY');
}

export const formatTime = (isoString) => {
  return dayjs(isoString).format('h:mm a')
}

export const formatHumanizeSeconds = (seconds) => {
  return dayjs.duration(seconds, "seconds").format('H[h] m[m]');
}