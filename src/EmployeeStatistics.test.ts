import { describe, it, expect } from "vitest";
import { EmployeeStatistics } from "./EmployeeStatistics";
import { Employee } from "./Employee"

const dataset1: Employee[] = [
  { name: "Garay Ágoston", age: 18, salary: 500000 },
  { name: "Bóta Milán", age: 18, salary: 700000 },
  { name: "Berényi Bence", age: 19, salary: 600000 },
];

const dataset2: Employee[] = [
  { name: "Merényi Miklós", age: 20, salary: 400000 },
  { name: "Budaházi Bence", age: 20, salary: 900000 },
];

describe("EmployeeStatistics", () => {

  // --- Constructor error handling ---
  describe("constructor", () => {
    it("dobjon hibát null esetén", () => {
      expect(() => new EmployeeStatistics(null as any)).toThrow("A dolgozók megadása kötelező");
    });

    it("dobjon hibát undefined esetén", () => {
      expect(() => new EmployeeStatistics(undefined as any)).toThrow("A dolgozók megadása kötelező");
    });
  });

  // --- getAverageSalary ---
  describe("getAverageSalary", () => {
    it("helyes átlagfizetés - dataset1", () => {
      const stats = new EmployeeStatistics(dataset1);
      expect(stats.getAverageSalary()).toBe(600000);
    });

    it("helyes átlagfizetés - dataset2", () => {
      const stats = new EmployeeStatistics(dataset2);
      expect(stats.getAverageSalary()).toBe(650000);
    });

    it("dobjon hibát üres lista esetén", () => {
      const stats = new EmployeeStatistics([]);
      expect(() => stats.getAverageSalary()).toThrow("Nincsenek dolgozók az adatbázisban");
    });
  });

  // --- getMaxSalary ---
  describe("getMaxSalary", () => {
    it("helyes maximum fizetés - dataset1", () => {
      const stats = new EmployeeStatistics(dataset1);
      expect(stats.getMaxSalary()).toBe(700000);
    });

    it("helyes maximum fizetés - dataset2", () => {
      const stats = new EmployeeStatistics(dataset2);
      expect(stats.getMaxSalary()).toBe(900000);
    });

    it("dobjon hibát üres lista esetén", () => {
      const stats = new EmployeeStatistics([]);
      expect(() => stats.getMaxSalary()).toThrow("Nincsenek dolgozók az adatbázisban");
    });
  });

  // --- getMinSalary ---
  describe("getMinSalary", () => {
    it("helyes minimum fizetés - dataset1", () => {
      const stats = new EmployeeStatistics(dataset1);
      expect(stats.getMinSalary()).toBe(500000);
    });

    it("helyes minimum fizetés - dataset2", () => {
      const stats = new EmployeeStatistics(dataset2);
      expect(stats.getMinSalary()).toBe(400000);
    });

    it("dobjon hibát üres lista esetén", () => {
      const stats = new EmployeeStatistics([]);
      expect(() => stats.getMinSalary()).toThrow("Nincsenek dolgozók az adatbázisban");
    });
  });

  // --- getAverageAge ---
  describe("getAverageAge", () => {
    it("helyes átlagéletkor - dataset1", () => {
      const stats = new EmployeeStatistics(dataset1);
      expect(stats.getAverageAge()).toBeCloseTo(18.33, 1); // (18+18+19)/3
    });

    it("helyes átlagéletkor - dataset2", () => {
      const stats = new EmployeeStatistics(dataset2);
      expect(stats.getAverageAge()).toBe(20); // (20+20)/2
    });

    it("dobjon hibát üres lista esetén", () => {
      const stats = new EmployeeStatistics([]);
      expect(() => stats.getAverageAge()).toThrow("Nincsenek dolgozók az adatbázisban");
    });
  });

  // --- getHighestPaidEmployee ---
  describe("getHighestPaidEmployee", () => {
    it("helyes legjobban fizetett dolgozó - dataset1", () => {
      const stats = new EmployeeStatistics(dataset1);
      expect(stats.getHighestPaidEmployee()).toBe("Bóta Milán"); // 700000
    });

    it("helyes legjobban fizetett dolgozó - dataset2", () => {
      const stats = new EmployeeStatistics(dataset2);
      expect(stats.getHighestPaidEmployee()).toBe("Budaházi Bence"); // 900000
    });

    it("dobjon hibát üres lista esetén", () => {
      const stats = new EmployeeStatistics([]);
      expect(() => stats.getHighestPaidEmployee()).toThrow("Nincsenek dolgozók az adatbázisban");
    });
  });
});