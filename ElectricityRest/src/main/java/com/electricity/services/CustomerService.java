package com.electricity.services;

import java.util.List;

import com.electricity.entities.Customer;


public interface CustomerService {
	
	public Customer addRecord(Customer customer);
	public Customer updateRecord(Customer customer, Long id);
	public void deleteRecord(Long id);
	public Customer getOneRecord(Long id);
	public List<Customer> getAllRecord();

}
