package com.electricity.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.electricity.entities.BillGenerator;
import com.electricity.services.BillService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class BillController {
	
	@Autowired
	private BillService billService;
	
	@PostMapping("/save")
	public String saved(@RequestBody BillGenerator billGenerator)
	{
		BillGenerator b1 = billService.createBill(billGenerator);
		String message = null;
		if (b1!=null)
		{
			message = "Generate Bill Successfully";
		} 
		else
		{
            message = "Bill Not Generated //"
            		+ "Please Try Again";
		}
		return message;
	}
	
    @PutMapping("update/{id}")
	public BillGenerator updateBill(@RequestBody BillGenerator billGenerator, @PathVariable Long id)
	{
		BillGenerator up = billService.updateBill(billGenerator, id);
		return up;
	}
    
    @GetMapping("/viewAll")
    public List<BillGenerator> viewAll()
    {
    	List<BillGenerator> viewA = billService.getAllBill();
    	return viewA;
    }

}
