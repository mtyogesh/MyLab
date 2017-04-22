<!DOCTYPE html>
<html>
	<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<%@ page trimDirectiveWhitespaces="true" %>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	
	<body>
		<form id="redirect-frm-v2" action="${redirectUrl}" method="post">
			<c:forEach var="map" items="${paramMap}">
				<c:forEach var="val" items="${map.value}">
					<input type="hidden" name="<c:out value="${map.key}" />" value="<c:out value="${val}" />" />
				</c:forEach>
			</c:forEach>
		</form>	
	</body>
	<script type="text/javascript">
		<c:if test="${not empty paramMap['hash']}">
			//window.location.hash = '<c:out value="${paramMap['hash'][0]}"/>';
		</c:if>
		document.getElementById("redirect-frm-v2").submit();
	</script>
</html>