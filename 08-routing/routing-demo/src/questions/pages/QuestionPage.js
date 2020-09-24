/**
/questions/37521557/how-to-correctly-use-react-route
 */

import React from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

function QuestionPage() {
	// {questionId: 'the url value', questionTitle: 'url value'}
	const params = useParams();
	const location = useLocation();
	
	return (
		<div>
			<h1>Question page</h1>			
			<p>
				{
					JSON.stringify(params)
				}
			</p>
			<p>
				{
					location.search
				}
			</p>
		</div>
	);
}

export default QuestionPage;