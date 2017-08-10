<%@page import="java.util.concurrent.TimeUnit"%>


Time 1 <%=new java.util.Date() %>
<%
	request.setAttribute("myPage", "time1.jsp");
	try {
		TimeUnit.SECONDS.sleep(2);
	} catch(InterruptedException e) { }

%>
