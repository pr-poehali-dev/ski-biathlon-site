import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface Result {
  id: number;
  athlete: string;
  competition: string;
  place: number;
  time: string;
  date: string;
}

interface Coach {
  name: string;
  specialty: string;
  experience: string;
}

const Index = () => {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: 1,
      title: 'Первенство области по лыжным гонкам',
      date: '2025-01-15',
      description: 'Наша команда заняла 2 место в общем зачёте! Поздравляем всех участников!'
    },
    {
      id: 2,
      title: 'Открытый кубок по биатлону',
      date: '2025-01-08',
      description: 'Отличные результаты юниорской команды - 3 золотые и 2 серебряные медали'
    },
    {
      id: 3,
      title: 'Начало весеннего сезона',
      date: '2025-02-01',
      description: 'Старт тренировок на весенний сезон. Ждём всех на стадионе!'
    }
  ]);

  const [results] = useState<Result[]>([
    { id: 1, athlete: 'Иванов Петр', competition: 'Первенство области', place: 1, time: '28:45', date: '15.01.2025' },
    { id: 2, athlete: 'Смирнова Анна', competition: 'Кубок города', place: 2, time: '32:18', date: '10.01.2025' },
    { id: 3, athlete: 'Кузнецов Михаил', competition: 'Открытые соревнования', place: 1, time: '25:30', date: '20.12.2024' },
    { id: 4, athlete: 'Петрова Ольга', competition: 'Первенство области', place: 3, time: '30:12', date: '15.01.2025' },
  ]);

  const coaches: Coach[] = [
    { name: 'Алексей Волков', specialty: 'Лыжные гонки', experience: '15 лет' },
    { name: 'Мария Соколова', specialty: 'Биатлон', experience: '12 лет' },
    { name: 'Игорь Морозов', specialty: 'Общая физическая подготовка', experience: '10 лет' }
  ];

  const schedule = [
    { day: 'Понедельник', time: '17:00 - 19:00', group: 'Начинающие', activity: 'Лыжные гонки' },
    { day: 'Вторник', time: '16:00 - 18:00', group: 'Продвинутые', activity: 'Биатлон' },
    { day: 'Среда', time: '17:00 - 19:00', group: 'Начинающие', activity: 'ОФП' },
    { day: 'Четверг', time: '16:00 - 18:00', group: 'Продвинутые', activity: 'Лыжные гонки' },
    { day: 'Пятница', time: '17:00 - 19:00', group: 'Все группы', activity: 'Биатлон' },
    { day: 'Суббота', time: '10:00 - 13:00', group: 'Все группы', activity: 'Соревнования/Тренировки' },
  ];

  const [newNewsTitle, setNewNewsTitle] = useState('');
  const [newNewsDate, setNewNewsDate] = useState('');
  const [newNewsDescription, setNewNewsDescription] = useState('');

  const handleAddNews = () => {
    if (newNewsTitle && newNewsDate && newNewsDescription) {
      const newItem: NewsItem = {
        id: news.length + 1,
        title: newNewsTitle,
        date: newNewsDate,
        description: newNewsDescription
      };
      setNews([newItem, ...news]);
      setNewNewsTitle('');
      setNewNewsDate('');
      setNewNewsDescription('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Mountain" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Лыжная секция</h1>
              <p className="text-sm text-muted-foreground">Школа №1</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#news" className="hover:text-primary transition-colors">Новости</a>
            <a href="#coaches" className="hover:text-primary transition-colors">Тренеры</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/945b7d08-c4e6-40a7-860c-e055df70187b/files/2e24003c-e28f-4819-af58-07d54b18df2b.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Лыжные гонки и биатлон
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Приглашаем детей и подростков в спортивную секцию. Профессиональные тренеры, современное оборудование, участие в соревнованиях.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Новости и события</h2>
            <p className="text-muted-foreground text-lg">Последние новости о соревнованиях и достижениях</p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Добавить новость</CardTitle>
                <CardDescription>Поделитесь новостью о соревнованиях или событиях</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Заголовок новости"
                  value={newNewsTitle}
                  onChange={(e) => setNewNewsTitle(e.target.value)}
                />
                <Input
                  type="date"
                  value={newNewsDate}
                  onChange={(e) => setNewNewsDate(e.target.value)}
                />
                <Textarea
                  placeholder="Описание новости"
                  value={newNewsDescription}
                  onChange={(e) => setNewNewsDescription(e.target.value)}
                  rows={4}
                />
                <Button onClick={handleAddNews} className="w-full">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить новость
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={item.id} className="hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {new Date(item.date).toLocaleDateString('ru-RU')}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="coaches" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши тренеры</h2>
            <p className="text-muted-foreground text-lg">Опытные специалисты с профессиональным подходом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle>{coach.name}</CardTitle>
                  <CardDescription className="text-base">{coach.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">Опыт: {coach.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Расписание тренировок</h2>
            <p className="text-muted-foreground text-lg">График занятий на неделю</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>День недели</TableHead>
                      <TableHead>Время</TableHead>
                      <TableHead>Группа</TableHead>
                      <TableHead>Занятие</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schedule.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.day}</TableCell>
                        <TableCell>{item.time}</TableCell>
                        <TableCell><Badge variant="outline">{item.group}</Badge></TableCell>
                        <TableCell>{item.activity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="results" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Результаты соревнований</h2>
            <p className="text-muted-foreground text-lg">Достижения наших спортсменов</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Спортсмен</TableHead>
                      <TableHead>Соревнование</TableHead>
                      <TableHead>Место</TableHead>
                      <TableHead>Время</TableHead>
                      <TableHead>Дата</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((result) => (
                      <TableRow key={result.id}>
                        <TableCell className="font-medium">{result.athlete}</TableCell>
                        <TableCell>{result.competition}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={result.place === 1 ? "default" : "secondary"}
                            className={result.place === 1 ? "bg-secondary" : ""}
                          >
                            {result.place} место
                          </Badge>
                        </TableCell>
                        <TableCell>{result.time}</TableCell>
                        <TableCell>{result.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами для записи в секцию</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Школьная, д. 1, спортивный комплекс</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (926) 987-65-43</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">ski.section@school1.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 16:00 - 20:00</p>
                      <p className="text-muted-foreground">Сб: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Лыжная секция школы №1. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
