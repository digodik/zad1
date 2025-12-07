export type Student = {
  name: string;
  grades: number[];
};

export function getMinGrade(grades: number[]): number {
  return Math.min(...grades);
}

export function getMaxGrade(grades: number[]): number {
  return Math.max(...grades);
}

export function getAverageGrade(grades: number[]): number {
  if (grades.length === 0) return 0;
  const sum = grades.reduce((a, b) => a + b, 0);
  return sum / grades.length;
}
