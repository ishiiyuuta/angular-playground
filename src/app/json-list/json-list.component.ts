import { Component, OnInit } from '@angular/core';
// import jsonData from '../../data.json';

@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.scss']
})
export class JsonListComponent implements OnInit {
  jsonData = {
    "key1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "key2": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    "key3": "At vero eos et accusamus et iusto odio dignissimos.",
    "key4": "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    "key5": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    "key6": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit.",
    "key7": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "key8": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    "key9": "At vero eos et accusamus et iusto odio dignissimos.",
    "key10": "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    "key11": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    "key12": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit.",
    "key13": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "key14": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    "key15": "At vero eos et accusamus et iusto odio dignissimos.",
    "key16": "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    "key17": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    "key18": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit.",
    "key19": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "key20": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    "key21": "At vero eos et accusamus et iusto odio dignissimos.",
    "key22": "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    "key23": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    "key24": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit.",
    "key25": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "key26": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    "key27": "At vero eos et accusamus et iusto odio dignissimos.",
    "key28": "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    "key29": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    "key30": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit."
    // Add more key-value pairs as needed...
  }

  items: { key: string, value: string }[] = Object.entries(this.jsonData)
    .map(([key, value]) => ({ key, value }));

  // selectedItems: string[] = [];
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void { }

  // selectItem(item: string): void {
  //   if (this.isSelected(item)) {
  //     this.selectedItems = this.selectedItems.filter(i => i !== item);
  //   } else {
  //     this.selectedItems.push(item);
  //   }
  // }

  // isSelected(item: string): boolean {
  //   return this.selectedItems.includes(item);
  // }
  selectedItems: { key: string, value: string }[] = [];

  selectItem(item: { key: string, value: string }): void {
    if (this.isSelected(item)) {
      this.selectedItems = this.selectedItems.filter(i => i !== item);
    } else {
      this.selectedItems.push(item);
    }
  }

  isSelected(item: { key: string, value: string }): boolean {
    return this.selectedItems.some(i => i.key === item.key && i.value === item.value);
  }

  deselectItem(item: string): void {
    this.selectedItems = this.selectedItems.filter(i => i.key !== item);
  }
}
