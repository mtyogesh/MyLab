abc
<#assign o=1234>
<#assign arr=["1", "2", "3", "4"]>
${o}
<#list arr as obj>${obj}<#if (obj_index < arr?size - 1 ) >, </#if></#list>