jQuery(document).ready(function($) {
        
        var pc_url = '/Lets-x64.zip';        // Windows下载资源
        var mac_url = '/Lets-x64.zip';       // Mac下载资源
        var ios_url = '/Lets-x64.zip';       // Ios下载资源
        var android_url = '/Lets-x64.zip';   // Android下载资源
		
        //下载链接
    	$('.btn-download a, .btn-download').each(function(){
    		var type = $(this).attr('data-type');
    		if(type){
    			$(this).attr('href','./download'+eval(type+'_url'));
    		}
    	});
	
});