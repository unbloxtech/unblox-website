function getday(date) {
    var d = new Date(date),
        day = '' + d.getDate()
    if (day.length < 2)
        day = '0' + day;
    return day;
}

function get_month_year(date) {
    var d = new Date(date).toLocaleString('en-us',{month:'short', year:'numeric'})
        
    return d
}

fetch("https://api.omny.fm/orgs/4bb33704-615b-4054-aae9-ace500fd4197/programs/daeea5e9-9f88-4f9e-b527-adfa0088c647/clips").then((data) => {
    return data.json();
}).then((completedata1) => {
    let data1 = "";
    completedata1.Clips.map((values) => {
        data1 +=
            `<div class="col-lg-1">
				<div class="post__date">
					<a href="#" class="number">${getday(values.PublishedUtc)}</a>
						<time class="published">
							${get_month_year(values.PublishedUtc)}
						</time>
				</div>
			</div>
            <div class="col-lg-11">
                <div class="post-thumb">
                    <iframe src="${values.EmbedUrl}" width="100%" height="180" loading="lazy" allow="autoplay; clipboard-write" frameborder="0" title="${values.Title}"></iframe>
                </div>
            </div>`
    });
    document.getElementById('podcasts').innerHTML = data1;
}).catch((err) => {
    console.log(err);
})