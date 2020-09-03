/**
loops
for() {}
 */
 
const students = [
	{id: 1, name: 'Haim', grade: 100},
	{ id: 2, name: 'Itay', grade: 100 },
	{ id: 2, name: 'Michal', grade: 100 },
]

/**
[
	<li></li>,
<li></li>,
]
**/

const list = (
	<ul>
		{
			students.map((singleStudent) => {
				
				return (
					<li>
						{singleStudent.id}. { singleStudent.name } ----&gt; {singleStudent.grade}
					</li>
				)
				
			})
		}
	</ul>
)

const list = (
	<ul>
		{
			(() => {
				for(...) {
					
				}
				
				return []
			})()
		}
	</ul>
)