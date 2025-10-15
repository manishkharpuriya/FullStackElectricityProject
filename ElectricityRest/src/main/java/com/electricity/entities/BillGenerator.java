package com.electricity.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class BillGenerator {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Long id;
	
	@Column
	private String month;
	
	@Column
	private int current_reading;
	
	@Column
	private int previous_reading;
	
	@Column
	private int units;
	
	@Column
	private double totalBill;
	
	@ManyToOne
	@JoinColumn(name = "electricity_cust_id", referencedColumnName = "id")
	private Customer electricity_cust;
    
	
	//PDC+PPC+PSM+PGM+toString()
	
	public BillGenerator() {
		super();
		// TODO Auto-generated constructor stub
	}


	public BillGenerator(Long id, String month, int current_reading, int previous_reading, int units, double totalBill,
			Customer customer) {
		super();
		this.id = id;
		this.month = month;
		this.current_reading = current_reading;
		this.previous_reading = previous_reading;
		this.units = units;
		this.totalBill = totalBill;
		this.electricity_cust = customer;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}
	


	public String getMonth() {
		return month;
	}


	public void setMonth(String month) {
		this.month = month;
	}


	public Customer getElectricity_cust() {
		return electricity_cust;
	}


	public void setElectricity_cust(Customer electricity_cust) {
		this.electricity_cust = electricity_cust;
	}


	public int getCurrent_reading() {
		return current_reading;
	}


	public void setCurrent_reading(int current_reading) {
		this.current_reading = current_reading;
	}


	public int getPrevious_reading() {
		return previous_reading;
	}


	public void setPrevious_reading(int previous_reading) {
		this.previous_reading = previous_reading;
	}


	public int getUnits() {
		return units;
	}


	public void setUnits(int units) {
		this.units = units;
	}


	public double getTotalBill() {
		return totalBill;
	}


	public void setTotalBill(double totalBill) {
		this.totalBill = totalBill;
	}


	public Customer getCustomer() {
		return electricity_cust;
	}


	public void setCustomer(Customer customer) {
		this.electricity_cust = customer;
	}


	@Override
	public String toString() {
		return "BillGenerator [id=" + id + ", month=" + month + ", current_reading=" + current_reading
				+ ", previous_reading=" + previous_reading + ", units=" + units + ", totalBill=" + totalBill
				+ ", electricity_cust=" + electricity_cust + "]";
	}


	
	
	

}
