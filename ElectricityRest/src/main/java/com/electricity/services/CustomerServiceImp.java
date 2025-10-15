package com.electricity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.electricity.entities.Customer;
import com.electricity.repositories.CustomerRepo;

@Service
public class CustomerServiceImp implements CustomerService {
	
	@Autowired
	private CustomerRepo customerRepo;

	@Override
	public Customer addRecord(Customer customer) {
	    Customer cust = (Customer) customerRepo.save(customer);
		return cust;
	}

	@Override
	public Customer updateRecord(Customer customer, Long id) {
		
		Optional<Customer> existingCustomer = customerRepo.findById(id);
	    if (existingCustomer.isPresent()) {
	        Customer updatedCustomer = existingCustomer.get();
	        updatedCustomer.setFirstname(customer.getFirstname());
	        updatedCustomer.setLastname(customer.getLastname());
	        updatedCustomer.setAddress(customer.getAddress());
	        updatedCustomer.setPhone(customer.getPhone());
	        updatedCustomer.setEmail(customer.getEmail());
	        return customerRepo.save(updatedCustomer);
	    }
	    return null; // or throw an exception if the customer is not found
	}



	@Override
	public void deleteRecord(Long id) {
		customerRepo.deleteById(id);

	}

	@Override
	public Customer getOneRecord(Long id) {
		Customer customer = (Customer) customerRepo.findById(id).get();
		return customer;
		
	}

	@Override
	public List<Customer> getAllRecord() {
		List<Customer> getAll = customerRepo.findAll();
		return getAll;
	}

}
