#!/usr/local/bin/perl
##############################################################################
# Countdown Lite               Version 1.0                                   #
# Copyright 1998 Edward Preble info@datatrendsoftware.com                    #
# Created 11/30/98             Last Modified 12/02/98                        #
# Datatrend Software           http://www.datatrendsoftware.com/cgi.html     #
##############################################################################
# This script will do the following:                                         #
# 1. Is activated by a link, "http://www.site.com/scripts/countdownlite.cgi" #
# 2. Will add a count to "countdownlite.log", which must exist.              #
# 3. Will auto-forward to a specified file for download.                     #
# 4. The interface is seamless, no user prompts.                             #
##############################################################################
# COPYRIGHT NOTICE                                                           #
# Copyright 1998 Edward Preble  All Rights Reserved.                         #
#                                                                            #
# This script is free.  You may use and modify this script as you please.    #
# Do not remove this header, as it is the only thing that gives me credit    #
# for my work in writing this code. If you wish to sell this code, you       #
# must obtain permission from the authors first.                             #
#                                                                            #
# Scripts provided by Datatrend Software are supplied "as-is". You agree     #
# to indemnify the author's from any liability that may arise from the use   #
# of this script. We will provide support for bugs and operation issues,     #
# but NOT for installation. Sorry for that, but it is just too time          #
# consuming and the volume of requests is truly staggering.                  #
#                                                                            #
# Obtain permission before redistributing this software over the Internet or #
# in any other medium.	In all cases copyright and header must remain intact.#
##############################################################################
#                                                                            #
# You must modify the the location of PERL in the first line above to match  #
# the location on your server. Your system admin must help you with this.    #
# You must also modify the following variables to match your preferences.    #

# This is the path to the counter log filename
$Counter = 'http://www.public.asu.edu/~hchen101/projects/SocialReflector/srcount.log';

# This is the URL address of the file that will be downloaded
$File = 'http://www.public.asu.edu/~hchen101/projects/SocialReflector/snreporter.air';

##########################################################
# No changes need to be made after these lines
##########################################################
# Add hit to main counter
open (CNT,"+<$Counter") || &endIt;
flock (CNT,2); seek (CNT,0,0);
@inFile = <CNT>;

($count,$eol) = split(/\|/,$inFile[0]);
    $count++;
    $inFile[0] = join ("\|",$count,"\n");

@outFile = sort {($b =~ /(\d+)/)[0] <=> ($a =~ /(\d+)/)[0]} @inFile;

seek (CNT,0,0);
print (CNT @outFile);
truncate (CNT,tell(CNT)); close (CNT);

	print "Content-type: text/html\n";
	print "Location: $File\n\n";

exit;

sub endIt # exit on error
{ exit;
} # end endIt
