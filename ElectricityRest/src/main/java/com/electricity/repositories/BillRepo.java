package com.electricity.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.electricity.entities.BillGenerator;

@Repository
public interface BillRepo extends JpaRepository<BillGenerator, Long> {

}
