package edu.yogi.web.service.impl;

import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.io.Writer;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;

public class BusinessJSONUtility {
	private static final ObjectMapper jsonMapper = new ObjectMapper();
	private static final JsonFactory jsonFactory = new JsonFactory();
	
	static {
//		DeserializationConfig config = jsonMapper.getDeserializationConfig();
//		config.set(Feature.FAIL_ON_UNKNOWN_PROPERTIES, false);
//		
//		SerializationConfig serializationConfig = jsonMapper.getSerializationConfig();
//		serializationConfig.setSerializationInclusion(Inclusion.NON_NULL);
	}
	
	public static <T> T deserialize(String json, Class<T> clazz) throws JsonParseException, IOException {
		if(json == null) {
			throw new IllegalArgumentException("supplied JSON string is null.");
		}
		JsonParser jp = jsonFactory.createParser(json);
		return readValue(jp, clazz);
	}
	
	
	/**
	 * Deserialize json into class T which is of generic type. 
	 * 
	 * @param json
	 * @param type
	 * @return
	 * @throws JsonParseException
	 * @throws IOException
	 */
	public static <T> T deserialize(String json, TypeReference<T> type) throws JsonParseException, IOException {
		if(json == null) {
			throw new IllegalArgumentException("supplied JSON string is null.");
		}
		JsonParser jp = jsonFactory.createParser(json);
		return readValue(jp, type);
	}

	public static <T> T deserialize(String json, JavaType type) throws JsonParseException, IOException {
		if(json == null) {
			throw new IllegalArgumentException("supplied JSON string is null.");
		}
		JsonParser jp = jsonFactory.createParser(json);
		return readValue(jp, type);
	}

	public static <T> T deserialize(URL url, Class<T> clazz) throws JsonParseException, IOException {
		if(url == null) {
			throw new IllegalArgumentException("supplied url is null.");
		}
		JsonParser jp = jsonFactory.createParser(url);
		return readValue(jp, clazz);
	}
	
	public static <T> T deserialize(InputStream in, Class<T> clazz) throws JsonParseException, IOException {
		if(in == null) {
			throw new IllegalArgumentException("supplied JSON InputStream is null.");
		}
		JsonParser jp = jsonFactory.createParser(in);
		return readValue(jp, clazz);
	}
	
	private static <T> T readValue(JsonParser jp, Class<T> clazz) throws JsonParseException, IOException {
		if(clazz == null) {
			throw new IllegalArgumentException("supplied value type class is null.");
		}
		return jsonMapper.readValue(jp, clazz);
	}
	
	private static <T> T readValue(JsonParser jp, TypeReference<T> type) throws JsonParseException, IOException {
		if(type == null) {
			throw new IllegalArgumentException("supplied value typereference is null.");
		}
		return jsonMapper.readValue(jp, type);
	}

	private static <T> T readValue(JsonParser jp, JavaType jType) throws JsonParseException, IOException {
		if(jType == null) {
			throw new IllegalArgumentException("supplied value jType is null.");
		}
		return jsonMapper.readValue(jp, jType);
	}

	public static String serialize(Object obj) throws JsonParseException, IOException {
		if(obj == null) {
			throw new IllegalArgumentException("supplied object is null.");
		}
		Writer w = new StringWriter();
		jsonMapper.writeValue(w, obj);
		return w.toString();
	}
	
	public static void main(String[] args) throws Exception, IOException {
		
		/*test1();
		test2();*/
		test3();
		
	}

	private static void test1() throws JsonParseException, IOException {
		List<ABC> l = new ArrayList<ABC>();
		l.add(new ABC("Yogesh", 567));
		l.add(new ABC("Deepak", 006));
		
		String json = serialize(l);
		//[{"a":"Yogesh","b":567},{"a":"Deepak","b":6}]
		System.out.println(json);
		
		//not good, will return List<Map>; Map objects will be created corresponding to each object
		//[{a=Yogesh, b=567}, {a=Deepak, b=6}]
		l = deserialize(json, ArrayList.class);
		
		System.out.println(l);
	}
	
	private static void test2() throws JsonParseException, IOException {
		
		Z z = new Z();
		
		String json = serialize(z);
		//{"l":[{"a":"Yogesh","b":567},{"a":"Deepak","b":6}]}
		System.out.println(json);
		
		z = deserialize(json, Z.class);
		//[ABC [a=Yogesh, b=567], ABC [a=Deepak, b=6]]
		System.out.println(z);
	}
	
	private static void test3() throws JsonParseException, IOException {
		
		Z obj = new Z();
		
		String json = serialize(obj);
		System.out.println(json);
		
		Object o = deserialize(json, Object.class);
//		this will be LinkedHashMap
		System.out.println(o);
	}
	
}

class Z {
	
	List<ABC> l = new ArrayList<ABC>();
	Z() {
		l.add(new ABC("Yogesh", 567));
		l.add(new ABC("Deepak", 006));
	}
	public List<ABC> getL() {
		return l;
	}
	public void setL(List<ABC> l) {
		this.l = l;
	}
	
	@Override
	public String toString() {
		return l.toString();
	}
}

class ABC {
	String a;
	int b;
	
	ABC() {}
	ABC(String a, int b) {
		this.a = a;
		this.b = b;
	}

	public String getA() {
		return a;
	}

	public void setA(String a) {
		this.a = a;
	}

	public int getB() {
		return b;
	}

	public void setB(int b) {
		this.b = b;
	}

	@Override
	public String toString() {
		return "ABC [a=" + a + ", b=" + b + "]";
	}
	
}
