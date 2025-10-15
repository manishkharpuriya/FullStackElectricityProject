package com.electricity.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.electricity.entities.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Long> {

}
