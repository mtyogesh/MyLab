package edu.yogi.web.service;

import edu.yogi.web.domain.Doc;
import edu.yogi.web.form.DocForm;

public interface IService {
	
	int addNum(int a, int b);
	
	Doc addDoc(DocForm form);
}
