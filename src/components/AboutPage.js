import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
    <div>
    	<div class="navbar navbar-default">
  			<div class="navbar-header">
    			<a class="navbar-brand" href="#">Your Logo</a>
    			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      				<span class="icon-bar"></span>
      				<span class="icon-bar"></span>
      				<span class="icon-bar"></span>
    			</button>
  			</div>
  			<div class="navbar-collapse collapse">
    		<ul class="nav navbar-nav navbar-right">
      			<li class="active"><a href="#">Your Links</a></li>
      			<li><a href="#">Your Links</a></li>
      			<li><a href="#">Your Links</a></li>
    		</ul>
  		</div>
		</div>
      <h1>This is ABOUTPAGE</h1>
    </div>
  );
  }
}

export default AboutPage;