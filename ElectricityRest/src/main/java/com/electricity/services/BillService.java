package com.electricity.services;

import java.util.List;

import com.electricity.entities.BillGenerator;

public interface BillService {
	
	public BillGenerator createBill(BillGenerator generator);
	public BillGenerator updateBill(BillGenerator generator, Long id);
	public List<BillGenerator> getAllBill();
	

}
