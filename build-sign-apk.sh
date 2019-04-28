#!/bin/bash

filename=$(echo $1 | cut -f 1 -d ".")
echo $filename $1
package=$(head alarm/AndroidManifest.xml | grep -oh 'package=\"*"\s') # | cut -f 2 -d "\"" )
echo $package
echo -e "\n\n\t1. Decompile APK and generate Java Source\n\t 2.Build APK and Sign"

read choice

case $choice in 
	1 )
	/usr/local/bin/apktols/apktool d -f -o $filename/ $1
	/usr/local/bin/apktols/apktool b -f -o $filename"-unsigned.apk" $filename/
	~/Desktop/APK/woRk12D3BE3/dex2jar-2.0/d2j-dex2jar.sh -o $filename.jar $filename"-unsigned.apk"
	/usr/local/bin/jadx -d $filename/src/ $filename.jar
	;;

	2 )
	rm -f $filename-signed.apk
	/usr/local/bin/apktols/apktool b -f -o $filename-unsigned.apk $1
#	~/Desktop/APK/woRk12D3BE3/dex2jar-2.0/d2j-apk-sign -f -o $filename-signed.apk $filename-unsigned.apk
	jarsigner -keystore mykey.keystore alarm-unsigned.apk ENZO1
	;;
esac

