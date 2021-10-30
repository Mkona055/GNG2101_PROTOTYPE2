from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome()
driver.get('https://www.octranspo.com/en/para-transpo/booking/reserve-a-trip')
WebDriverWait(driver, 1).until(EC.frame_to_be_available_and_switch_to_it((By.XPATH,"/html/body/div[2]/div[2]/div[1]/div/div[1]/p[5]/iframe")))

registrationNumber = driver.find_element(by=By.XPATH, value= '/html/body/form/div[3]/div[2]/div/div/div[1]/input')
firstName = driver.find_element_by_xpath('/html/body/form/div[3]/div[2]/div/div/div[2]/input')
lastName = driver.find_element_by_xpath('/html/body/form/div[3]/div[2]/div/div/div[3]/input')
email = driver.find_element_by_xpath('/html/body/form/div[3]/div[2]/div/div/div[4]/input')
phoneNumber = driver.find_element_by_xpath('/html/body/form/div[3]/div[2]/div/div/div[5]/input')
timeHours = Select(driver.find_element_by_xpath('/html/body/form/div[3]/div[3]/div[2]/div[1]/div/fieldset/div/div[1]/select[1]'))
timeMin =  Select(driver.find_element_by_xpath('/html/body/form/div[3]/div[3]/div[2]/div[1]/div/fieldset/div/div[1]/select[2]'))
homeCheckBox = driver.find_element_by_xpath('/html/body/form/div[3]/div[3]/div[2]/div[1]/div/fieldset/div/div[3]/input')


registrationNumber.send_keys(1236456)
firstName.send_keys("Mohamed")
lastName.send_keys("Konate")
email.send_keys("mkona055@uottawa.ca")
phoneNumber.send_keys(61311122244)



#First Trip 
timeHours.select_by_index(3)
timeMin.select_by_index(3)
homeCheckBox.click()