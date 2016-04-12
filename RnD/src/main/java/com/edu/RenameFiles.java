package com.edu;

import java.io.File;
import java.net.URLDecoder;
import java.nio.file.Files;

public class RenameFiles {

	public static void main(String[] args) throws Exception {
		renameFiles( new File("D:\\sw\\songs") );
	}
	
	
	private static void renameFiles(File dir) throws Exception {
		if(!dir.isDirectory()) {
			return;
		}
		for(File f : dir.listFiles()) {
			if(f.isDirectory()) {
				renameFiles(f);
			} else {
				String name = f.getName();
				name = URLDecoder.decode(name, "UTF-8");
				File newFile = new File(f.getParent(), name);
				Files.move(f.toPath(), newFile.toPath());
			}
		}
	}
	

}
