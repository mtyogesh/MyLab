<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:set var="str1" value="<script>alert(1)</script>" />
<c:set var="str2" value="<img src='x' onerror='alert(2)' />" />
<c:set var="str3" value="<img src='x' onerror='javascript:alert(3)' />" />
<c:set var="str4" value="<div style='height: 20px; width: 50px; border: 1px solid;' onmouseover='alert(4)'></div>" />

${str1}
${str2}
${str3}
${str4}
<c:out value="${str1}" />
<c:out value="${str2}" />
<c:out value="${str3}" />
<c:out value="${str4}" />

<%= new java.util.Date() %>