package com.electricity.controllers;

import java.util.List;

import org.hibernate.query.NativeQuery.ReturnableResultNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.electricity.entities.Customer;
import com.electricity.services.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/saved")
	public String saveData(@RequestBody Customer customer) 
	{
		Customer c1 = customerService.addRecord(customer);
		String message = null;
		if (c1!=null)
		{
			message = "Data Saved Successfully";
		} 
		else 
		{
			message = "Data Failed";
		}
		return message;
	}
	
	@PutMapping("/updates/{id}")
	public Customer update(@RequestBody Customer customer, @PathVariable Long id)
	{
		Customer update = customerService.updateRecord(customer, id);
		return update;
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable Long id)
	{
		customerService.deleteRecord(id);
	}
	
	@GetMapping("/get/{id}")
	public Customer getOne(@PathVariable Long id)
	{
		Customer get = customerService.getOneRecord(id);
		return get;
	}
	
	@GetMapping("/getAll")
	public List<Customer> getAll()
	{
		List<Customer>getAll = customerService.getAllRecord();
		return getAll;
	}
	

}
