package com.donation.service;

import java.util.List;
import java.util.Optional;

import com.donation.model.Donation;
import com.donation.model.User;

public interface DonationService {
	public Donation createDonation(Donation donation);
	public List<Donation> getDonations();
	public Optional<Donation> getDonationById(int cId); 
	public Donation updateDonation(Donation customer);
	public void deleteDonation(int cId);
	public User createUser(User user);

	
	public User fetchUserByemailAndPassword(String tempEmail, String tempPassword);
	

}
