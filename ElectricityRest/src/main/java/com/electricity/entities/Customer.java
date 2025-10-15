package com.electricity.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "electricity_cust")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String firstname;
	private String lastname;
	private String address;
	private String phone;
	private String email;
	
	@JsonIgnore
	@OneToMany(mappedBy = "electricity_cust",cascade = CascadeType.ALL)
	private List<BillGenerator> generators;

	//PDC+PPC+PSM+PGM+toString()
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(Long id, String firstname, String lastname, String address, String phone, String email,
			List<BillGenerator> generators) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.generators = generators;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<BillGenerator> getGenerators() {
		return generators;
	}

	public void setGenerators(List<BillGenerator> generators) {
		this.generators = generators;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", address=" + address
				+ ", phone=" + phone + ", email=" + email + ", generators=" + generators + "]";
	}
	
	

}
