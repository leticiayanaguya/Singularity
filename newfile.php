public boolean validateIdentifier(String s) {
	char achar;
	boolean valid_id = false;
	if(s.length() > 0) {
		achar = s.chatAt(0);
		valid_id= valid_s(achar);
		if(s.length() > 1) {
			achar = s.charAt(1);
			int i = 1;
			while(i < s.length() -1) {
				achar = s.charAt(i);
				if(!valid_f(achar))
					valid_id = false;
				i++;
			}
		}
	}
	if(valid_d && (s.length() >= 1) && (s.length() < 6))
		return true;
	else 
		return false;
}