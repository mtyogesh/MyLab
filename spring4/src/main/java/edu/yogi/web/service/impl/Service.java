package edu.yogi.web.service.impl;

import edu.yogi.web.domain.Doc;
import edu.yogi.web.form.DocForm;
import edu.yogi.web.service.IService;

@org.springframework.stereotype.Service
public class Service implements IService {

	@Override
	public int addNum(int a, int b) {
		return a + b;
	}

	@Override
	public Doc addDoc(DocForm form) {
		Doc d = new Doc();
		d.setId(form.getId());
		d.setTitle(form.getTitle());
		d.setDescription(form.getDescription());
		return d;
	}

}
