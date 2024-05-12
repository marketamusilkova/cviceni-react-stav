import { useCasVSekundach } from './hodiny'

/*
Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas
  ve formátu 7:49:05.

Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je
  0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.
*/

const formatTime = (timeInSecond) => {
  const hours = Math.floor(timeInSecond / 3600)
  const minutes = String(Math.floor(timeInSecond / 60) % 60).padStart(2, "0")
  const seconds = String(timeInSecond % 60).padStart(2, "0")
  
  return `${hours}:${minutes}:${seconds}`
}

export const ZaverecnyBonus3 = () => {
  const casVSekundach = useCasVSekundach()

  return (
    <>
      Čas právě teď: <b>{formatTime(casVSekundach)}</b>
    </>
  )
}
