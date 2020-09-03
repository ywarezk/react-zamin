/**
	conditional something
	if ...
 */
 
const someCondition = true;
 
const p = (
	<div>
		<p>
			{ someCondition ? 'this is true' : (
				<span>itay example</span>
			) }
		</p>
	</div>
)

const p = (
	<div>
		<p>
			{ someCondition || 'something' }
		</p>
	</div>
)

const p = (
	<div>
		<p>
			{someCondition && 'something'}
		</p>
	</div>
)

// Wrong
const p = (
	<div>
		<p>
			{if () {}}
		</p>
	</div>
)

const p = (
	<div>
		<p style={{ backgroundColor: someCondition ? 'red' : 'blue'} }>
			{
				(function(){
					if () {
						
					} else {
						
					}
					
					for() {
						
					}
					
					
					return 42;
					
				})()
			}
		</p>
	</div>
)

const p = (
	<div>
		<p style={{ backgroundColor: someCondition ? 'red' : 'blue' }}>
			{
				(() => {
					if () {

					} else {

					}

					for () {

					}


					return 42;

				})()
			}
		</p>
	</div>
)

const p = (
	<div>
		<p style={{ backgroundColor: someCondition ? 'red' : 'blue' }}>
			{
				createContentofP()
			}
		</p>
	</div>
)

/** 
let itayP = null;
if (itayCondition) {
	itayP = (
		
	)
} else {
	itayP = (
		
	)
}
*/

const props = {}
if (shimonCondition) {
	props['data-source']="..."
} else {
	props['source'] = "..."
}

// <img data-source="..." />
const img = <img {...props} />