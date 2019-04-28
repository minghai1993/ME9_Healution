#!/bin/bash
#set -euxo pipeline #this is as a mitigation to shell shock

#Install Lynx command line Browser
dpkg -s "lynx" &> /dev/null
if [ $? -eq 0 ]; then
	echo "Lynx is installed"
else
	echo "lynx is not installed"
	sudo apt install -y lynx
fi

#Check and Install php7.2 and dependencies
dpkg -s "php7.2" "php7.2-mysql" "libapache2-mod-php7.2" "php7.2-cli"\
       "php7.2-cgi" "php7.2-gd" &> /dev/null

if [ $? -eq 0 ]; then
	echo "php7.2 and it's dependencies are installed"
else
	echo "php7.2 and it's dependencies are Not installed"
	sudo apt install -y php7.2
	sudo apt install -y php7.2-mysql
	sudo apt install -y libapache2-php7.2
	sudo apt install -y php7.2-cli
	sudo apt install -y php7.2-gd
fi
sudo chown -R enzo:enzo	www-data:www-data /var/www/html/.*
echo "permission changed"
sudo chown -R www-data:www-data /var/www/html
echo "permission changed"
sudo chmod -R 775 /var/www
sudo touch <<EOF >/var/www/html/info.php 
<?php
echo 'Currnet PHP version: ' . phpversion();
phpinfo();
?> 
EOF
echo "info.php is created"
dpkg -s "apache2" &> /dev/null
if [ $? -eq 0 ]; then
	echo "Apache2 is installed"
else
	echo "Apache2 is not installed"
	sudo apt install -y apache2 apache2-utils
	systemctl status apache2 
	sudo systemctl enable apache2
	sudo sytemctl start apache2

fi

dpkg -s "mysql-server" & "mysql-client" &> /dev/null
if [ $? -eq 0 ]; then
	echo "Mysql is installed"
else
	echo "Mysql is not installed"
	sudo apt install -y mysql-server mysql-client
fi


