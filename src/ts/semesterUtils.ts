import { getISOWeek } from "date-fns";

export function isSummerSemester(): boolean {
    return new Date().getMonth() >= 2 && new Date().getMonth() <= 8;
}

export function isSecondYearOfWinterSemester(): boolean {
    return new Date().getMonth() <= 1;
}

export function getSemesterStartYear(): number {
    return (isSecondYearOfWinterSemester() ? new Date().getFullYear() - 1 : new Date().getFullYear());
}

export function getCurrentWeek(): number {
    let currentWeek = getISOWeek(new Date());
    if (isSecondYearOfWinterSemester()) currentWeek += 52; // Planungswochen werden auch nach dem Jahreswechsel fortlaufend nummeriert
    return currentWeek;
}

export function currentSemesterName(): string {
    let semesterName = (isSummerSemester() ? "Sommersemester " : "Wintersemester ");
    if (!isSummerSemester()) semesterName += getSemesterStartYear() + "/" + (getSemesterStartYear() + 1).toString().substring(2);
    else semesterName += getSemesterStartYear();
    return semesterName;
}

export function getSemesterNumber(): number {
    let semesterNumber = 98; // Wintersemester 2024/25
    let initialStartYear = 2024;
    semesterNumber += getSemesterStartYear() - initialStartYear;
    if (!isSummerSemester()) semesterNumber++;

    return semesterNumber;
}
