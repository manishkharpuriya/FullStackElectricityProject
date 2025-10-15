package com.electricity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.electricity.entities.BillGenerator;
import com.electricity.repositories.BillRepo;

@Service
public class BillServiceImp implements BillService {
	
	@Autowired
	private BillRepo billRepo;

	@Override
	public BillGenerator createBill(BillGenerator generator) {
		
		int unts = 0;
		double total = 0.0;
		
		unts = generator.getCurrent_reading()-generator.getPrevious_reading();
		generator.setUnits(unts);
		if (unts<300)
		{
			total = unts*5;
		}
		else if (unts>=300 && unts<500)
		{
			total = unts*7.5;
		}
		else if (unts>=500)
		{
			total = unts*9;
		}
		
		generator.setTotalBill(total);
		BillGenerator g = billRepo.save(generator);
		return g;
	}

	@Override
	public BillGenerator updateBill(BillGenerator generator, Long id) {
		
		BillGenerator old = billRepo.findById(id).get();
		
		old.setMonth(generator.getMonth());
		old.setCurrent_reading(generator.getCurrent_reading());
		old.setPrevious_reading(generator.getPrevious_reading());
		old.setElectricity_cust(generator.getElectricity_cust());
		
		int unts = 0;
		double total = 0.0;
		
		unts = generator.getCurrent_reading()-generator.getPrevious_reading();
		generator.setUnits(unts);
		if (unts<300)
		{
			total = unts*5;
		}
		else if (unts>=300 && unts<500)
		{
			total = unts*7.5;
		}
		else if (unts>=500)
		{
			total = unts*9;
		}
		
		old.setUnits(unts);
		old.setTotalBill(total);
		BillGenerator g = billRepo.save(old);
		return g;
	}

	@Override
	public List<BillGenerator> getAllBill() {
		List<BillGenerator> getAll = billRepo.findAll();
		return getAll;
	}

}
